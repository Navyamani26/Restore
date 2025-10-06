using System;

namespace API.DTOs;

public class BasketDtos
{
    public required string BasketId { get; set; }

    public List<BasketItemDto> Items { get; set; } = [];

    public string? ClientSecret { get; set; }
    public string? PaymentIntentId { get; set; }

}
