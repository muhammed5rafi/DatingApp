using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Data;
using Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;

        public UsersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUser(){
            
             return await  _context.User.ToListAsync();
           
           
        }

         [HttpGet("{Id}")]
        public async Task<ActionResult<AppUser>> GetUser(int id){
            
           return await _context.User.FindAsync(id);
          
        }
    }
}