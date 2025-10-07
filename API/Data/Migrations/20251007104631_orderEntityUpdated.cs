using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class orderEntityUpdated : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "paymentSummary_Last4",
                table: "Orders",
                newName: "PaymentSummary_Last4");

            migrationBuilder.RenameColumn(
                name: "paymentSummary_ExpYear",
                table: "Orders",
                newName: "PaymentSummary_ExpYear");

            migrationBuilder.RenameColumn(
                name: "paymentSummary_ExpMonth",
                table: "Orders",
                newName: "PaymentSummary_ExpMonth");

            migrationBuilder.RenameColumn(
                name: "paymentSummary_Brand",
                table: "Orders",
                newName: "PaymentSummary_Brand");

            migrationBuilder.AlterColumn<string>(
                name: "PaymentIntentId",
                table: "Orders",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PaymentSummary_Last4",
                table: "Orders",
                newName: "paymentSummary_Last4");

            migrationBuilder.RenameColumn(
                name: "PaymentSummary_ExpYear",
                table: "Orders",
                newName: "paymentSummary_ExpYear");

            migrationBuilder.RenameColumn(
                name: "PaymentSummary_ExpMonth",
                table: "Orders",
                newName: "paymentSummary_ExpMonth");

            migrationBuilder.RenameColumn(
                name: "PaymentSummary_Brand",
                table: "Orders",
                newName: "paymentSummary_Brand");

            migrationBuilder.AlterColumn<string>(
                name: "PaymentIntentId",
                table: "Orders",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");
        }
    }
}
