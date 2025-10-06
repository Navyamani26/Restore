using System;

namespace API.RequestHelpers;

public class PaginationMetadata
{
    public int TotalCount { get; set; }

    public int PageSizw { get; set; }

    public int CurrentPage { get; set; }

    public int TotalPages { get; set; }
}
