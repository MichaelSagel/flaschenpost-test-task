namespace FlaschenpostBackend.Models;

public class ProductQuery
{
    public bool OnlyCheap { get; set; } = false;
    public string? SortOrder { get; set; }
}
