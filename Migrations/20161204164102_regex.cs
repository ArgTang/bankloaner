using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace testing.Migrations
{
    public partial class regex : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "amount",
                table: "Loan",
                nullable: false);

            migrationBuilder.AlterColumn<string>(
                name: "phone",
                table: "customers",
                maxLength: 8,
                nullable: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "amount",
                table: "Loan",
                nullable: false);

            migrationBuilder.AlterColumn<string>(
                name: "phone",
                table: "customers",
                nullable: false);
        }
    }
}
