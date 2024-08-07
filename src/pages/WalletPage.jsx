

// import React from 'react';
// import { Container, Typography, Box, Card, CardContent, Grid, Button } from '@mui/material';
// import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

// const WalletPage = () => {
//   // Sample wallet data
//   const walletData = {
//     balance: 1500,
//     transactions: [
//       { id: 1, description: 'Purchase at Store X', amount: -50, date: '2024-07-15' },
//       { id: 2, description: 'Refund from Store Y', amount: 30, date: '2024-07-14' },
//       { id: 3, description: 'Purchase at Store Z', amount: -200, date: '2024-07-13' },
//     ],
//     expensesThisMonth: 50,
//   };

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
//         {/* Total Balance Section */}
//         <Box sx={{ flex: 1 }}>
//           <Typography variant="h4" gutterBottom>
//             <b>Total Balance:</b> ${walletData.balance.toFixed(2)}
//           </Typography>
//         </Box>

//         {/* Buttons */}
//         <Box sx={{ flex: 1, textAlign: 'right' }}>
//           <Button variant="contained" sx={{ mr: 1 }}>Withdraw Balance</Button>
//           <Button variant="contained" sx={{ mr: 1 }}>Send</Button>
//           <Button variant="contained" sx={{ mr: 1 }}>Cards</Button>
//           <Button variant="contained">Add</Button>
//         </Box>
//       </Box>

//       {/* Banners for Bank Offers */}
//       <Box sx={{ mb: 4 }}>
//         <Typography variant="h5" gutterBottom>Bank Offers</Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={4}>
//             <Card sx={{ p: 2 }}>
//               <CardContent>
//                 <Typography variant="h6">Bank Offer 1</Typography>
//                 <Typography variant="body2">Description of Bank Offer 1</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Card sx={{ p: 2 }}>
//               <CardContent>
//                 <Typography variant="h6">Bank Offer 2</Typography>
//                 <Typography variant="body2">Description of Bank Offer 2</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Card sx={{ p: 2 }}>
//               <CardContent>
//                 <Typography variant="h6">Bank Offer 3</Typography>
//                 <Typography variant="body2">Description of Bank Offer 3</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Expenses This Month Section */}
//       <Card sx={{ mb: 3, p: 2, bgcolor: '#f5f5f5' }}>
//         <CardContent>
//           <Typography variant="h5" gutterBottom>Expenses This Month</Typography>
//           <Typography variant="h4" color="error">
//             ${walletData.expensesThisMonth.toFixed(2)}
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* Recent Transactions Section */}
//       <Typography variant="h5" gutterBottom>
//         Recent Transactions
//       </Typography>

//       <Grid container spacing={2}>
//         {walletData.transactions.map((transaction) => (
//           <Grid item xs={12} sm={6} md={4} key={transaction.id}>
//             <Card sx={{ mb: 2, p: 2, borderLeft: `5px solid ${transaction.amount < 0 ? '#f44336' : '#4caf50'}` }}>
//               <CardContent>
//                 <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                   {transaction.description}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {transaction.date}
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   color={transaction.amount < 0 ? 'error' : 'success'}
//                   sx={{ mt: 1 }}
//                 >
//                   {transaction.amount < 0 ? <RemoveCircleOutline /> : <AddCircleOutline />} ${Math.abs(transaction.amount).toFixed(2)}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default WalletPage;

import React from 'react';
import { Container, Typography, Box, Card, CardContent, Grid, Button, CardMedia } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

const WalletPage = () => {
  // Sample wallet data
  const walletData = {
    balance: 5000,
    transactions: [
      { id: 1, description: 'Purchase of Frock', amount: -500, date: '2024-07-15' },
      { id: 2, description: 'Refund for Shirt', amount: -800, date: '2024-07-14' },
      { id: 3, description: 'Purchase of Pant', amount: -1000, date: '2024-07-13' },
    ],
    expensesThisMonth: 2700,
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        {/* Total Balance Section */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            <b>Total Balance:</b> Rs.{walletData.balance.toFixed(2)}
          </Typography>
        </Box>

        {/* Buttons */}
        <Box sx={{ flex: 1, textAlign: 'right' }}>
          <Button variant="contained" sx={{ mr: 1 }}>Withdraw Balance</Button>
          <Button variant="contained" sx={{ mr: 1 }}>Send</Button>
          <Button variant="contained" sx={{ mr: 1 }}>Cards</Button>
          <Button variant="contained">Add</Button>
        </Box>
      </Box>

      {/* Banners for Bank Offers */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>Bank Offers</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ p: 0, boxShadow: 'none' }}>
              <CardMedia
                component="img"
                height="200"
                image="https://s3-ap-southeast-1.amazonaws.com/cashback-static/upload/files/2021-04-15/1e81c596b77a88c3caedb6b754c19091.jpg"
                alt="Bank Offer 1"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ p: 0, boxShadow: 'none' }}>
              <CardMedia
                component="img"
                height="200"
                image="https://grabdeals.axisbank.com/images/partner/Instantvouchersave.jpg"
                alt="Bank Offer 2"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ p: 0, boxShadow: 'none' }}>
              <CardMedia
                component="img"
                height="200"
                image="https://www.goindigo.in/content/dam/indigov2/6e-website/header/campaigns/2019/09/Federal-Bank-LP-Mweb.jpg"
                alt="Bank Offer 3"
              />
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Expenses This Month Section */}
      <Card sx={{ mb: 3, p: 2, bgcolor: '#f5f5f5' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Expenses This Month</Typography>
          <Typography variant="h4" color="error">
            Rs.{walletData.expensesThisMonth.toFixed(2)}
          </Typography>
        </CardContent>
      </Card>

      {/* Recent Transactions Section */}
      <Typography variant="h5" gutterBottom>
        Recent Transactions
      </Typography>

      <Grid container spacing={2}>
        {walletData.transactions.map((transaction) => (
          <Grid item xs={12} sm={6} md={4} key={transaction.id}>
            <Card sx={{ mb: 2, p: 2, borderLeft: `5px solid ${transaction.amount < 0 ? '#f44336' : '#4caf50'}` }}>
              <CardContent>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {transaction.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {transaction.date}
                </Typography>
                <Typography
                  variant="body1"
                  color={transaction.amount < 0 ? 'error' : 'success'}
                  sx={{ mt: 1 }}
                >
                  {transaction.amount < 0 ? <RemoveCircleOutline /> : <AddCircleOutline />} Rs.{Math.abs(transaction.amount).toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WalletPage;
