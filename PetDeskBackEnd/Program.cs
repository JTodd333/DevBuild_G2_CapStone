using MySql.Data.MySqlClient;
using petdesk;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "LocalOriginsPolicy",
    builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
          );
}
);


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("LocalOriginsPolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

string connstring = app.Configuration.GetConnectionString("db");
DAL.CS = connstring;

app.Run();
