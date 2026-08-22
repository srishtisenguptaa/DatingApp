using API.DTOs;
using API.Entities;
using API.Interfaces;

namespace API.Extension;

public static class AppExtension
{
    public static UserDto ToDto(this AppUser user, ITokenServices tokenServices)
    {
        return new UserDto
        {
            Id = user.Id.ToString(),
            DisplayName = user.DisplayName,
            Token = tokenServices.CreateToken(user),
            Email = user.Email
        };
    }
}