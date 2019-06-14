create table houses (
id serial primary key,
name varchar(30),
address varchar(100),
city varchar(100),
state varchar(2),
zip integer,
img text,
mortgage DECIMAL,
rent DECIMAL
);

insert into table (name, address, city, state, zip, img, mortgage, rent)
values ('Triplex', '1551 West Main Street', 'Salt Lake City', 'UT', 84097, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRoj5Ouy_tHNEsfOTKmRXNJKw6ZxK5BIqnfRZzWHIS6CMP5KCLVw', 300000, 4000);

insert into table (name, address, city, state, zip, img, mortgage, rent)
values ('Duplex', '4000 Somewhere Street', 'Richmond', 'VA', 22958, 'https://images1.apartments.com/i2/FFyM9L85f42XinBKMxejvUa0q2c92bWgaXU9Bmt0gDY/111/goebels-duplex-community-wichita-ks-primary-photo.jpg', 200000, 2000);

insert into table (name, address, city, state, zip, img, mortgage, rent)
values ('Single', '300 Lost My Way', 'Salt Lake City', 'UT', 84097, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxr0KmZn7ab3nOjkXgTGb49K_rD6mDn2qCyDDrl4Y6Q8H-0RQ2g', 150000, 1200);