using Microsoft.EntityFrameworkCore;

namespace API.RequestHelpers;

public class PageList<T> : List<T> // Product
{
    public PageList(List<T> items, int count, int PageNumber, int PageSizw)
    {
        Metadata = new PaginationMetadata
        {
            TotalCount = count,
            PageSizw = PageSizw,
            CurrentPage = PageNumber,
            TotalPages = (int)Math.Ceiling(count / (double)PageSizw)
        };
        AddRange(items);
    }

    public PaginationMetadata Metadata { get; set; }

    public static async Task<PageList<T>> ToPageList(IQueryable<T> query,
    int PageNumber, int PageSizw)
    {
        var count = await query.CountAsync();
        var items = await query.Skip((PageNumber - 1) * PageSizw).Take(PageSizw).ToListAsync();

        return new PageList<T>(items, count, PageNumber, PageSizw);
    }
}

