using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using finterest.Models;

namespace finterest.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }
        public IActionResult CreateAccount()
        {
            ViewData["Message"] = "Your account creation page";

            return View();
        }

        [HttpPost]
        public IActionResult CreateAccount(string name,string email, bool music, bool fooddrink, bool professional, bool education, bool fashion, bool volunteering, bool entertainment, bool health)
        {
            Account createAccount = new Account();

            createAccount.Name = name;
            createAccount.Email = email;

            if (music){
                createAccount.Music = true; 
            }
            if (fooddrink){
                createAccount.FoodDrink = true; 
            }
            if (professional){
                createAccount.Professional = true; 
            }
            if (education){
                createAccount.Education = true; 
            }
            if (fashion){
                createAccount.Fashion = true; 
            }
            if (volunteering){
                createAccount.Volunteering = true; 
            }
            if (entertainment){
                createAccount.Entertainment = true; 
            }
            if (health){
                createAccount.Health = true; 
            }

            return View("Index");

        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
