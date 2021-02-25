using System;
using System.Reflection;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Contexts
{
    public class TimeLogContext : DbContext
    {
        public DbSet<TimeLog> TimeLogs { get; set; }

        public TimeLogContext()
        {
        }

        public TimeLogContext(DbContextOptions<TimeLogContext> options) : base(options){}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = Configuration.StaticConfig.GetValue<string>("ConnectionStrings:TimeLog:Dev");
            optionsBuilder.UseSqlServer(connectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}