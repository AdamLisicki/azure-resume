# Static website hosted on Azure with views counter

Link to this website: https://www.showcase.adamlisicki.pl/

Staticc website hosted on Azure with HTTP triggered Azure Function that interacts with CosmosDB. </br>
When the function is triggered, it retrieves number of views from CosmosDB database, adds 1 to it, and saves it and returns its value to the caller.  </br>
GiHub Actions is used for CI/CD.

Technologies:
- HTML
- CSS
- JavaScript
- C#
- Azure Blob storage
- Azure Functions
- CosmosDB
- GitHub Actions

## Architecture

![architecture](https://github.com/AdamLisicki/azure-static-website/blob/main/azure-static-website.png)
