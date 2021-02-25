using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using server.Models;

namespace server.Entities
{
    public class TimeLogConfiguration : IEntityTypeConfiguration<TimeLog>
    {
        public void Configure(EntityTypeBuilder<TimeLog> builder)
        {
            builder.ToTable("TimeLogs");

            builder.HasKey(t => t.Timestamp);

            builder.Property(t => t.Name).HasMaxLength(100).IsRequired();
        }
    }
}