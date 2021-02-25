using System.Threading.Tasks;
using DynamicQuerying.Main.Query.Models;
using DynamicQuerying.Main.Query.Services;
using Microsoft.AspNetCore.Mvc;
using server.Contexts;
using server.Dtos;
using server.Models;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TimeController : ControllerBase
    {
        private readonly TimeLogContext _context;

        public TimeController(TimeLogContext context)
        {
            _context = context;
        }

        [HttpPost("get")]
        public async Task<IActionResult> GetLoggedTime(QueryRequest queryRequest)
        {
            var timeLogs = await QueryService.GetQueryResponseAsync(_context.TimeLogs, queryRequest);
            return Ok(timeLogs);
        }

        [HttpPost]
        public async Task<IActionResult> AddLoggedTime(TimeLogRequest timeLogRequest)
        {
            await _context.TimeLogs.AddAsync(new TimeLog
            {
                Name = timeLogRequest.Name,
                Notes = timeLogRequest.Notes,
                Timestamp = timeLogRequest.Timestamp,
                DurationInSeconds = timeLogRequest.DurationInSeconds
            });
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}