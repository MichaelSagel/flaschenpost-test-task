using Microsoft.AspNetCore.Mvc;
using FlaschenpostBackend.Models;
using System.Net.Http.Json;

namespace FlaschenpostBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private const string SourceUrl = "https://flapotest.blob.core.windows.net/test/ProductData.json";
    private static readonly HttpClient httpClient = new();

    [HttpGet]
    public async Task<IActionResult> Get([FromQuery] ProductQuery query)
    {
        var products = await httpClient.GetFromJsonAsync<List<Product>>(SourceUrl);

        if (products == null)
        {
            return Problem("Failed to load product data.");
        }

        var result = products.Where(p =>
        {
            var firstArticle = p.Articles.FirstOrDefault();
            if (firstArticle == null)
                return false;

            var parsed = ParsePricePerLiter(firstArticle.PricePerUnitText);
            return parsed.HasValue && (!query.OnlyCheap || parsed.Value <= 2.0m);
        }).ToList();

        if (!string.IsNullOrWhiteSpace(query.SortOrder))
        {
            var order = query.SortOrder.ToLower();

            if (order == "ascending")
            {
                result = result
                    .OrderBy(p => p.Articles.FirstOrDefault()?.Price ?? decimal.MaxValue)
                    .ToList();
            }
            else if (order == "descending")
            {
                result = result
                    .OrderByDescending(p => p.Articles.FirstOrDefault()?.Price ?? decimal.MinValue)
                    .ToList();
            }
        }

        return Ok(result);
    }

    private decimal? ParsePricePerLiter(string? text)
    {
        if (string.IsNullOrWhiteSpace(text))
            return null;

        text = text
            .Replace("€", "")
            .Replace("/Liter", "", StringComparison.OrdinalIgnoreCase)
            .Replace("/l", "", StringComparison.OrdinalIgnoreCase)
            .Replace("(", "")
            .Replace(")", "")
            .Replace(" ", "")
            .Replace(",", ".");

        if (decimal.TryParse(text, out var value))
        {
            return value;
        }

        return null;
    }
}
