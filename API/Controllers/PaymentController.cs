using System;
using API.Data;
using API.DTOs;
using API.Extensions;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
namespace API.Controllers;

public class PaymentController(PaymentServices paymentService, StoreContext context) : BasicApiController
{
    [Authorize]
    [HttpPost]
    public async Task<ActionResult<BasketDtos>> CreateOrUpdatePaymentIntent()
    {
        var basket = await context.Baskets.GetBasketWithItems(Request.Cookies["basketId"]);

        if (basket == null) return BadRequest("problem with the basket");

        var intent = await paymentService.CreateOrUpdatePaymentIntent(basket);
        if (intent == null) return BadRequest("problem creating payment intent");

        basket.PaymentIntentId ??= intent.Id;
        basket.ClientSecret ??= intent.ClientSecret;

        if (context.ChangeTracker.HasChanges())
        {
             var result = await context.SaveChangesAsync() > 0;
        if (!result) return BadRequest("problem updating basket with intent");
            
        }
        return basket.ToDto();
    }
}
