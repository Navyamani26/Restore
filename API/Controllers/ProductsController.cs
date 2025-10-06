using API.Data;
using API.Entities;
using API.Extensions;
using API.RequestHelpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController(StoreContext context) : BasicApiController
    {

        private readonly StoreContext context = context;

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts([FromQuery] ProductsParams productsParams)
        {
            var query = context.Products
            .Sort(productsParams.OrderBy)
            .Search(productsParams.SearchTerm)
            .Filter(productsParams.Brands, productsParams.Types)
            .AsQueryable();

            var products = await PageList<Product>.ToPageList(query,
             productsParams.PageNumber, productsParams.PageSizw);

            Response.AddPaginationHeader(products.Metadata);

            return products;
        }

        [HttpGet("{id}")] // api/products/3

        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await context.Products.FindAsync(id);

            if (product == null) return NotFound();

            return product;
        }

        [HttpGet("filters")]
        public async Task<IActionResult> GetFilters()
        {
            var Brands = await context.Products.Select(x => x.Brand).Distinct().ToListAsync();
            var types = await context.Products.Select(x => x.Type).Distinct().ToListAsync();

            return Ok(new { Brands, types });

        }
        
    }
}
