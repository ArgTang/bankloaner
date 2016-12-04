using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Bankloaner.Data;

namespace testing.Migrations
{
    [DbContext(typeof(CustomerContext))]
    [Migration("20161204164102_regex")]
    partial class regex
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Bankloaner.Data.Models.Customer", b =>
                {
                    b.Property<string>("secNumber");

                    b.Property<string>("email")
                        .IsRequired();

                    b.Property<string>("name")
                        .IsRequired();

                    b.Property<string>("phone")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 8);

                    b.HasKey("secNumber");

                    b.ToTable("customers");
                });

            modelBuilder.Entity("Bankloaner.Data.Models.Loan", b =>
                {
                    b.Property<int>("loanId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CustomersecNumber");

                    b.Property<int>("amount");

                    b.Property<DateTime>("start");

                    b.Property<int>("time");

                    b.HasKey("loanId");

                    b.HasIndex("CustomersecNumber");

                    b.ToTable("Loan");
                });

            modelBuilder.Entity("Bankloaner.Data.Models.Loan", b =>
                {
                    b.HasOne("Bankloaner.Data.Models.Customer")
                        .WithMany("Loans")
                        .HasForeignKey("CustomersecNumber");
                });
        }
    }
}
