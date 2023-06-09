"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./src/modal/User");
var Laptop_1 = require("./src/modal/product/Laptop");
var TV_1 = require("./src/modal/product/TV");
var Phone_1 = require("./src/modal/product/Phone");
var main_1 = require("./src/main");
var main = new main_1.Main();
var laptop1 = new Laptop_1.Laptop("HP G850", 2000, "HP", 32, "Core i9 13 Gen", "RTX4090", 512);
var phone1 = new Phone_1.Phone("S20", 400, "Sumsung", 5000, 108);
var tv1 = new TV_1.TV("Sumsung 2", 500, "Sumsung", 32, false, "Amoled");
var tv2 = new TV_1.TV("Sumsung 2", 500, "Sumsung", 32, false, "Amoled");
main.addProducts(laptop1, phone1, tv1, tv2);
// console.log(main.getProductsList());
// console.log(main.showProducts("Tv"));
// main.signUp("Madina", "ya_medinee", "hyg782hjd");
// main.signUp("Madina", "ya_medine", "n3hui2jce");
var user1 = new User_1.User("Madina", "ya_medinee", "hyg782hjd", 1000000);
var user2 = new User_1.User("Zilola", "zabihullaeva_zilola", "zilola05", 11222);
var user3 = new User_1.User("Malika", "mlkvmu_", "malika05", 345643);
main.addUsers(user1, user2, user3);
console.log("Users list: ", main.getUsersList());
// console.log("Admin :", main.checkAdmin(user3));
