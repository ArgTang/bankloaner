using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace testing.Migrations
{
    public partial class change1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "timeInMonths",
                table: "Loan");

            migrationBuilder.AddColumn<int>(
                name: "time",
                table: "Loan",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "time",
                table: "Loan");

            migrationBuilder.AddColumn<int>(
                name: "timeInMonths",
                table: "Loan",
                nullable: false,
                defaultValue: 0);
        }
    }
}
