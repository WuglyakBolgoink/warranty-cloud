# Warranty-Cloud

## Use cases

- My Receipt
  - create receipt
  - edit receipt
  - remove receipt
  - remove all receipts
- Define Category
  - create category
  - edit category
  - remove category
- Define Location
  - create location
  - edit location
  - remove location
- use photos
  - upload 1..n
  - remove
  - remove all
- 

## Nice to have features

- send push notifications
- multiple currencies
- add extended warranty (e.g. user add Washing Machine with 1year garanty. But he can additionally add another warranty for example for motor)
  - cost
  - expiry date
  - Warranty Coverage (Notes, optional)
  - [add]/[remove] remibder (Toggle-Button)
- multiple buildings (e.g. house-1, house-2)
- backup in file
- backup in cloud
- export into pdf file


----


## Interfaces

### Location

> E.g.: Rooms

- id
- name


### Category

> E.g.: Home & Kitchen, Kids & Toys, Phones, Electronicsd

- id
- name
- color
- icon?

### Recipe

- id
- product details
  - product name (название)
  - merchant (место покупки, опционально)
    - product Brand
    - retailer merchant (название магазина) 
    - merchant adress (адрес магазина)
  - EAN (опционально)
  - purchase date (дата покупки)
  - purchase value (стоимость покупки)
  - product serial number (серийный номер, опционально)
- product category 
  - location
  - category
- warranty date (дата окончания гарантии)
- warranty information (примечание гарантии, опционально)
- remarks (примечание, опционально)
- images (фотографи товара, 0..5, опционально)
  - image_001


## Pages

- onboarding
  - login
  - registration
  - email confirmation
- dashboard portal
  - dashboard [..|.....]
    - 
