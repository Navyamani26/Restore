using System;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public required DbSet<Product> Products { get; set; }

    // Baskets name of the table
    public required DbSet<Basket> Baskets { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityRole>()
         .HasData(
            new IdentityRole { Id = "48308abe-00d2-4235-bb40-eea6219d7a8f",Name = "Member", NormalizedName = "MEMBER" },
            new IdentityRole { Id = "cc6a4b39-bb23-48b8-b3cd-2b6830988a7d",Name = "Admin", NormalizedName = "ADMIN" }
         );
    }
}