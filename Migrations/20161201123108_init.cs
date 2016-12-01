using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace testing.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "customers",
                columns: table => new
                {
                    secNumber = table.Column<string>(nullable: false),
                    email = table.Column<string>(nullable: false),
                    name = table.Column<string>(nullable: false),
                    phone = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_customers", x => x.secNumber);
                });

            migrationBuilder.CreateTable(
                name: "Loan",
                columns: table => new
                {
                    loanId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CustomersecNumber = table.Column<string>(nullable: true),
                    amount = table.Column<decimal>(nullable: false),
                    start = table.Column<DateTime>(nullable: false),
                    timeInMonths = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Loan", x => x.loanId);
                    table.ForeignKey(
                        name: "FK_Loan_customers_CustomersecNumber",
                        column: x => x.CustomersecNumber,
                        principalTable: "customers",
                        principalColumn: "secNumber",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Loan_CustomersecNumber",
                table: "Loan",
                column: "CustomersecNumber");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Loan");

            migrationBuilder.DropTable(
                name: "customers");
        }
    }
}
