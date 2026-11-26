users:
- id
- name
- email
- password
- userType
- createdAt
- active

products:
- id
- product_name
- product_price
- product_category

orders:
- id
- customer (ManyToOne)
- product (ManyToOne)
- order_status
- delivery_status
- orderDate