namespace FlaschenpostBackend.Models;

public class Product
{
    public int Id { get; set; }
    public string BrandName { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string? DescriptionText { get; set; }
    public List<Article> Articles { get; set; } = new();
}
