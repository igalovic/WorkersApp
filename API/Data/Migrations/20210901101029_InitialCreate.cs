using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Zaposlenici",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Ime = table.Column<string>(type: "TEXT", nullable: false),
                    Prezime = table.Column<string>(type: "TEXT", nullable: false),
                    Slika = table.Column<string>(type: "TEXT", nullable: true),
                    Spol = table.Column<string>(type: "TEXT", nullable: false),
                    GodinaRodenja = table.Column<int>(type: "INTEGER", nullable: false),
                    PocetakRada = table.Column<DateTime>(type: "TEXT", nullable: false),
                    VrstaUgovora = table.Column<string>(type: "TEXT", nullable: false),
                    TrajanjeUgovora = table.Column<int>(type: "INTEGER", nullable: false),
                    Odjel = table.Column<string>(type: "TEXT", nullable: false),
                    BrojDanaGodišnjegOdmora = table.Column<int>(type: "INTEGER", nullable: true),
                    BrojSlobodnihDana = table.Column<int>(type: "INTEGER", nullable: true),
                    BrojDanaPlacenogDopusta = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Zaposlenici", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Zaposlenici");
        }
    }
}
