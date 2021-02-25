using System;

namespace server.Models
{
    public class TimeLog
    {
        public DateTime Timestamp { get; set; }
        public string Name { get; set; }
        public string Notes { get; set; }
        public int DurationInSeconds { get; set; }
    }
}