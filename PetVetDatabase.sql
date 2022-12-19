drop database if exists petdesk;
create database petdesk;
use petdesk;

create table contacts
(
    id int NOT NULL AUTO_INCREMENT,
    user_name varchar(30),
    contact_name varchar(50) NOT NULL,
    phone varchar(20),
    email varchar(50),
    address varchar(80),
    primary key (id)
);

insert into contacts (user_name, contact_name, phone, email, address) values ("jesse", 'North River Animal Hospital', '810-985-6117', 'northrivervet@comcast.net', '2909 N River Rd Fort Gratiot, MI 48059');
insert into contacts (user_name, contact_name, phone, email, address) values ("jesse", 'Veterinary Cardiology Consultants', '248-402-4322', 'info@vetcardiologyconsultants.com', '265 E 2nd Street Rochester, MI 48307');
insert into contacts (user_name, contact_name, phone, email, address) values ("jesse", 'Animal Emergency Center', '248-651-1788', 'info@AEC.vet', '265 E 2nd Street Rochester, MI 48307');
insert into contacts (user_name, contact_name, phone, email, address) values ("fidan", 'Raleigh Animal Hospital', '919-948-4210', 'info@vetraleigh.com', '1108 Dresser Ct Raleigh, NC 27609');
insert into contacts (user_name, contact_name, phone, email, address) values ("fidan", 'Best Pet Groomer', '111-222-3333', 'info@bestgroomer.com', '1234 Main St Raleigh, NC 27609');
insert into contacts (user_name, contact_name, phone, email, address) values ("eddie", 'East Detroit Animal Hospital', '586-776-5011', 'edahpets@gmail.com', '24506 Gratiot Ave Eastpointe, MI 48021');
insert into contacts (user_name, contact_name, phone, email, address) values ("eddie", 'Woodward Pet Sitting', '248-565-2792', 'info@woodwardpetsitting.com', '1122 Woodward Ave Ferndale, MI 48220');

select * from contacts;

create table pet
(
    id int NOT NULL AUTO_INCREMENT,
    user_name varchar(30),
    pet_name varchar(30),
    species varchar(30),
    breed varchar (30),
    dob varchar(30),
    pet_notes varchar(300),
    primary key (id)
);

insert into pet (user_name, pet_name, species, breed, dob, pet_notes) values ("jesse", 'Ronnie', 'Dog', 'Chihuahua', '07-03-2013', 'History of MVD' );
insert into pet (user_name, pet_name, species, breed, dob, pet_notes) values ("jesse", 'Poppy', 'Dog', 'Italian Greyhound', '06-20-2019', 'No known allergies.' );
insert into pet (user_name, pet_name, species, breed, dob, pet_notes) values ("eddie", 'Cuci', 'Cat', 'Siamese', '12-12-2022', 'Cuci is a siamese cat' );
insert into pet (user_name, pet_name, species, breed, dob, pet_notes) values ("fidan", 'Nelli', 'Dog', 'Rottweiler', '11-20-2019', 'Nelli is a rottweiler dog' );
insert into pet (user_name, pet_name, species, breed, dob, pet_notes) values ("fidan", 'Kiwi', 'Cat', 'Persian', '05-02-2019', 'Kiwi is a persian cat' );
Select * From pet;


create table appointment
(
    id int NOT NULL AUTO_INCREMENT,
    pet_id int,
    pet_name varchar(30),
    appt_date varchar(40),
    provider varchar(40),      
    appt_notes varchar(300),
    primary key (id)
);

insert into appointment (pet_id, pet_name, appt_date, provider, appt_notes) values (1, 'Ronnie', '03-20-2023 12:20pm', 'Dr. Brown (Cardiology)', 'follow-up, echocardiogram');
insert into appointment (pet_id, pet_name, appt_date, provider, appt_notes) values (4, 'Nelli', '01-22-2023 10:30am', 'Raleigh Animal Hospital', 'annual, vaccinations');
insert into appointment (pet_id, pet_name, appt_date, provider, appt_notes) values (5, 'Kiwi', '12-29-2022 2:20pm', 'Dr. White (dermatology)', 'skin discoloration consult');
insert into appointment (pet_id, pet_name, appt_date, provider, appt_notes) values (2, 'Poppy', '03-13-2023 11:15am', 'North River Animal Hospital', 'annual, physical');
insert into appointment (pet_id, pet_name, appt_date, provider, appt_notes) values (3, 'Cuci', '12-09-2022 2:15pm', 'Detroit Animal Hospital', 'annual, vaccinations');
Select * From appointment;

create table rx
(
    id int NOT NULL AUTO_INCREMENT,
    pet_id int,
    pet_name varchar(30),
    rx_name varchar(30),
    rx_reminder varchar(100),   
    rx_notes varchar(300),
    primary key (id)
);

insert into rx (pet_id, pet_name, rx_name, rx_reminder, rx_notes ) values (1, "Ronnie", 'Vetmedin (Pimobendan)', '8:30am, 4:30pm, 12am', '3x a day, every 8hrs: within 2hrs of food');
insert into rx (pet_id, pet_name, rx_name, rx_reminder, rx_notes ) values (1, "Ronnie",'Enalapril', '12:00pm, 12:00am', '2x a day, every 12hrs');
insert into rx (pet_id, pet_name, rx_name, rx_reminder, rx_notes ) values (1, "Ronnie", 'Lasix', '12:00pm, 12:00am', '2x a day, every 12hrs');
insert into rx (pet_id, pet_name, rx_name, rx_reminder, rx_notes ) values (1, "Ronnie", 'Heartgard', '15th of each month', 'Once a month');
insert into rx (pet_id, pet_name, rx_name, rx_reminder, rx_notes ) values (2, "Poppy",'Heartgard', '15th of each month', 'Once a month');
insert into rx (pet_id, pet_name, rx_name, rx_reminder, rx_notes ) values (3, "Cuci", 'Amoxicilin (antibiotic)', '9:00am, 9:00pm', '2x a day, every 12hrs');
insert into rx (pet_id, pet_name, rx_name, rx_reminder, rx_notes ) values (4, "Nelli", 'Tylenol (pain reducer)', '8:00am, 4:00pm, 12:00am', 'every 8 hours');
insert into rx (pet_id, pet_name, rx_name, rx_reminder, rx_notes ) values (5, "Kiwi", 'Thyroid (hormone)', '8:00pm', '1x a day, every night');

Select * From rx;

Create View pet_rx_list as
    Select distinct(pet.id) pet_id,
        pet.pet_name, pet.species, pet.user_name, pet.dob,
        rx.id rx_id, rx_name, rx_reminder, rx_notes
    from pet
    inner join rx on pet.id = rx.pet_id;
    
Select * From pet_rx_list;
Select * From pet;
Select * From appointment;
Select * From rx;

Create View visit_list as
      Select distinct(pet.id) pet_id,
        pet.pet_name, pet.species, pet.dob, pet.pet_notes, pet.user_name,
        appointment.id appt_id, appointment.appt_date, appointment.provider, appointment.appt_notes
    from pet
    inner join appointment on pet.id = appointment.pet_id;
    
Select * from visit_list;