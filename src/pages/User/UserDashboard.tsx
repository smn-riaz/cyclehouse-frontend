import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const user = 
  { name: "Charlie Brown", email: "charlie@example.com" }


const orderedProducts = [
  { name: "Laptop", type: "Electronics", totalPrice: "$1,200", quantity: 2 },
  { name: "Headphones", type: "Accessories", totalPrice: "$200", quantity: 1 },
  { name: "Coffee Maker", type: "Appliances", totalPrice: "$150", quantity: 1 },
];

const totalLifetimeCost = "$32,450";

 const UserDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      
   
      <Card className="bg-white rounded-xl">
        <CardHeader className="flex items-start space-x-2">
          <CardTitle className="text-lg font-semibold">@Me</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            
              <p>
             <span className="font-semibold"> Name: </span>{user.name}
              </p>
              <p >
              <span className="semibold">Email: </span>{user.email}
              </p>
      
          </ul>
        </CardContent>
      </Card>

    
      <Card className="bg-white  rounded-xl col-span-1 md:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Ordered Products</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Total Price</TableHead>
                <TableHead>Quantity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orderedProducts.map((product, index) => (
                <TableRow key={index}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.type}</TableCell>
                  <TableCell>{product.totalPrice}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

     
      <Card className="bg-white  rounded-xl">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Total Cost (Lifetime Orders)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-green-600">{totalLifetimeCost}</p>
        </CardContent>
      </Card>

    </div>
  );
}

export default UserDashboard