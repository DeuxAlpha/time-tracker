using System;

namespace server.Dtos
{
    public class TimeLogRequest
    {
        public DateTime Timestamp { get; set; }
        public string Name { get; set; }
        public string Notes { get; set; }
        public int DurationInSeconds { get; set; }
    }
}