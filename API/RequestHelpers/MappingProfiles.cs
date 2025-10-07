using System;
using System.Security.Cryptography.X509Certificates;
using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.RequestHelpers;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<CreateProductDto, Product>();

    }
}
