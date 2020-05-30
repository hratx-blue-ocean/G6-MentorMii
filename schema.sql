DROP DATABASE IF EXISTS MentorMii;

CREATE DATABASE MentorMii;

USE MentorMii;

CREATE TABLE Mentor (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(50) NOT NULL,
  lastName varchar(50) NOT NULL,
  skill varchar(200) NOT NULL,
  review varchar(500) NOT NULL,
  picture varchar(200) NOT NULL,
  userName varchar(200) NOT NULL,
  password varchar(200) NOT NULL,
  email varchar(200) NOT NULL,
  bio varchar(500) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Mentii (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(50) NOT NULL,
  lastName varchar(50) NOT NULL,
  picture varchar(200) NOT NULL,
  userName varchar(200) NOT NULL,
  password varchar(200) NOT NULL,
  email varchar(200) NOT NULL,
  PRIMARY KEY (ID)
);




INSERT INTO Mentor (firstName, lastName, skill, review, picture, userName, password, email, bio)
VALUES ("Paul", "Blart", "C++", "Paul didn't know what he was talking about! All he keep saying was, this lemonade is insane! He was drinking a magarita",
 "https://blueoceang6.s3.us-east-2.amazonaws.com/G6/Blart.jpg", "topFlightSecurity", "OfTheWorld", "paulblart@gmail.com", "My name is Paul, and I have been a C++ mentor for 6 months."),
("Nik", "Mentakis", "javascript", "Nik knew everything but needs a haircut", "https://blueoceang6.s3.us-east-2.amazonaws.com/G6/Nik.jpg", "JediMaster", "macewindu", "nikmentakis@gmail.com", "I'm a full stack engineer that is interested in building innovative solutions to difficult everyday problems. I love solving challenging obstacles across the stack that stretch my knowledge and encourage personal growth.");
('3','Juanita','Roob','C++','Quia itaque a voluptatum voluptas corporis. Aut corrupti neque consequatur explicabo. Nam in quo et et in sint.','https://recommendedforyou.s3.us-east-2.amazonaws.com/12055105.jpg','pdurgan','6745accb3384137612ff9c1c5af51b5011366464','wlind@example.com','Quia necessitatibus et nobis. Aliquam dolorem mollitia illum sint in dolores. Id veniam aut sunt facere incidunt et tempore.'),
('4','Brad','Kerluke','C++','Minus labore itaque nisi dolorem. Amet necessitatibus sint voluptas animi id. Deserunt alias sed recusandae voluptatibus consequuntur qui.','https://recommendedforyou.s3.us-east-2.amazonaws.com/12055105.jpg','mbednar','54af72e70163f80b6644f24da72ba730e214ee56','jwalker@example.net','A esse velit voluptatibus sint. Autem nobis at qui exercitationem dolorem dignissimos harum non. Consectetur amet voluptatem nihil voluptatem voluptatibus. Sit deleniti eius iusto cupiditate sunt voluptatem.'),
('5','Dakota','Borer','C++','Dolor qui reprehenderit expedita recusandae autem dolores tempore accusantium. Quibusdam excepturi aut cumque corrupti nulla consequatur assumenda. Magnam quidem officiis necessitatibus.','https://recommendedforyou.s3.us-east-2.amazonaws.com/12055105.jpg','treva98','ee9cd26105b0b64e3d4ebd006b75c3e71608c269','vonrueden.casper@example.org','Enim eaque deserunt assumenda qui illum. Ea et sed voluptatem consequatur. Delectus ullam quae qui deleniti rerum architecto. Voluptatem eveniet voluptas minima vel quia maiores necessitatibus.'),
('6','Anjali','Champlin','C++','Non facilis libero nihil porro excepturi praesentium omnis. In non praesentium inventore ut. Omnis labore eum deserunt qui sunt tempore ipsam et.','https://recommendedforyou.s3.us-east-2.amazonaws.com/12055105.jpg','joshua.walter','32b612ae76788ee4f67a71e274192c185d361d43','rcorwin@example.org','Fugit dolorem et autem explicabo et placeat harum quisquam. Dolore est nulla occaecati voluptas asperiores ratione. Aut voluptas laboriosam adipisci qui placeat magnam.'),
('7','Jocelyn','Swift','C++','Voluptate aut nulla nihil placeat. Eaque voluptatem sit et omnis minus inventore architecto. Voluptatibus quia natus autem. Et ut officia corrupti ut.','https://recommendedforyou.s3.us-east-2.amazonaws.com/12055105.jpg','schoen.kelli','775409f0be9d0f43fa7ccf0717ac75857ca5f797','charley43@example.net','Laboriosam vitae labore et omnis vel maxime. Voluptatum voluptates rerum ut fugit dolor sint. Eos eaque quis dolorem qui.'),
('8','Katharina','Yost','C++','Consequatur quia explicabo eum iusto nemo. Modi et magnam in sapiente.','https://recommendedforyou.s3.us-east-2.amazonaws.com/12055105.jpg','frank68','2dc65c3686b63f087ce1787c7e9efbee19d8ed5c','bauch.kade@example.com','Optio temporibus vero et dolorem ducimus. Placeat ut illum voluptas accusantium sunt placeat. Omnis asperiores nesciunt sit modi doloribus voluptas.'),
('9','Lucienne','Hills','C++','Rerum debitis commodi sequi est sequi laudantium suscipit delectus. Qui alias dolore cumque est architecto autem.','https://recommendedforyou.s3.us-east-2.amazonaws.com/12055105.jpg','vmitchell','9157ca3b12ffc677590d025671d137bf55522337','spencer.mack@example.net','Tempore qui fuga aliquid qui enim blanditiis. Adipisci et rerum sit ipsa ut. Corporis autem dolore voluptate necessitatibus. Est alias quia architecto dolor minima.'),
('10','Naomi','Wisozk','C++','Est culpa corporis explicabo corporis at voluptates. Omnis ut ducimus sunt dolores ut ducimus. Molestiae explicabo molestiae blanditiis omnis id consequatur iure blanditiis. Odio perferendis quia nostrum at dolorem non quia.','https://recommendedforyou.s3.us-east-2.amazonaws.com/12055105.jpg','aurore81','8cd20e15ed8ca67be9727371bd6fc877274099d5','gjerde@example.org','Maxime modi quae nihil et magni est. Aut quos accusamus in. Aut ipsam rerum necessitatibus hic.'),
('11','Jayden','Spinka','Javascript','Sapiente numquam numquam dolor. Facere ut ut ut quam. Itaque facilis in et deserunt dolores.','https://recommendedforyou.s3.us-east-2.amazonaws.com/12055105.jpg','vito45','51a83a86bec4cf04bbeb683a56f9d85aadb296fe','sharon04@example.net','Qui vitae ea et nesciunt et nam. Quam consequuntur et fuga totam soluta veniam culpa. Aut nihil voluptatem quisquam.'),
('12','Anastacio','Monahan','Javascript','Illo maxime voluptas sed rerum deleniti voluptatem. Eum magnam amet ducimus illo et nostrum qui. A enim et nihil et necessitatibus at. Quia et modi nisi fugit.','https://recommendedforyou.s3.us-east-2.amazonaws.com/12055105.jpg','hilpert.diamond','df05ded6d0906a4bfa0f558e2c20b934b99b1b99','jessie08@example.com','Et rerum natus vitae perferendis sint. Non molestiae ullam ducimus id debitis officia quam. Deserunt corporis eius natus voluptas.'),
('13','Lorna','Batz','Javascript','Aut vel deleniti explicabo omnis eveniet mollitia deserunt. Voluptates et laudantium dolores eum atque et minima. Officia labore in neque blanditiis alias amet.','https://recommendedforyou.s3.us-east-2.amazonaws.com/12055105.jpg','rking','cf9d4ddd43ffa1d97afbc5e6a5b90b078648892e','gjast@example.com','Fugit libero quia minima velit illum voluptas id et. Vel alias sit tempora recusandae corrupti. Vel repellat magni quae ut facilis quia. Qui ut aspernatur eum sunt.'),
('14','Zelma','Gutmann','Javascript','Et fugiat vel numquam aliquam repudiandae cumque. Et consequatur facilis officiis molestiae inventore. Natus ea cupiditate quia amet voluptas.','https://recommendedforyou.s3.us-east-2.amazonaws.com/12055105.jpg','shanie85','a52566af3b31b968efa59bec422011fa26278296','rico53@example.com','Nemo non ab quod eos ut ducimus voluptatem. Ullam itaque eaque deleniti possimus repudiandae. Suscipit corrupti accusantium quia blanditiis neque. Ea incidunt et deleniti eius aperiam et. Mollitia fuga nihil amet asperiores id est nostrum.'),
('15','Keven','Sipes','Javascript','Mollitia quas ea et corporis quia. Quisquam et rerum fugit natus. Atque mollitia tenetur et qui. Sit distinctio quisquam ut et.','https://recommendedforyou.s3.us-east-2.amazonaws.com/12055105.jpg','sammy69','1d3530392016e078ad3df8370a4ea1d2ca0a3a76','dina47@example.net','Facere inventore nisi nihil quae. Omnis voluptatem saepe voluptatibus non dolor et. Ea quasi odit adipisci corrupti dolorem.'),
('16','Celestino','Schneider','Javascript','Nisi aut esse vel facilis amet rerum et cumque. Et est ab temporibus consequatur fuga non rem. Dolorem autem dolor iste impedit.','https://recommendedforyou.s3.us-east-2.amazonaws.com/12055105.jpg','koss.jackie','b55b97105479e725ff48410d9fe36a60544bdbcc','vonrueden.anna@example.org','Voluptatum modi sapiente voluptatem velit. Repellat qui et eos amet doloremque recusandae autem. Deleniti officia dolorem facere nulla aperiam facilis adipisci. Porro aliquam animi animi.'),
('17','Keshawn','Willms','Javascript','Ut distinctio nobis eligendi et sequi. Soluta exercitationem voluptas rem qui. Ea delectus maiores quod assumenda.','https://recommendedforyou.s3.us-east-2.amazonaws.com/12055105.jpg','tommie40','9c7c451c3fb589db44527ebeef92237a1f5a57cc','thegmann@example.com','Dolores rerum deleniti cupiditate accusamus quia odit autem amet. Vel blanditiis veniam nam debitis totam. Vel nesciunt non dolore.'); 





INSERT INTO Mentii (firstName, lastName, picture, userName, password, email)
VALUES ("Andy", "Herrera", "https://blueoceang6.s3.us-east-2.amazonaws.com/G6/Andrew.jpg", "RentAcop", "spurs", "andrewherrara@gmail.com"),
 ("Collin", "Synder", "https://blueoceang6.s3.us-east-2.amazonaws.com/G6/Collin.jpg", "SpaceShip", "aliens", "collinsnyder@gmail.com");










