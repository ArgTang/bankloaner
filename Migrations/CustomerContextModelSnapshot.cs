using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Bankloaner.Data;

namespace testing.Migrations
{
    [DbContext(typeof(CustomerContext))]
    partial class CustomerContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
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
                        .IsRequired();

                    b.HasKey("secNumber");

                    b.ToTable("customers");
                });

            modelBuilder.Entity("Bankloaner.Data.Models.Loan", b =>
                {
                    b.Property<int>("loanId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CustomersecNumber");

                    b.Property<decimal>("amount");

                    b.Property<DateTime>("start");

                    b.Property<int>("timeInMonths");

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
