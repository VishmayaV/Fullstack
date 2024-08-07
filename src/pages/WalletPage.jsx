import React from 'react';
import { Container, Typography, Box, Card, CardContent, Grid } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

const WalletPage = () => {
  // Sample wallet data
  const walletData = {
    balance: 1500,
    transactions: [
      { id: 1, description: 'Purchase at Store X', amount: -50, date: '2024-07-15' },
      { id: 2, description: 'Refund from Store Y', amount: 30, date: '2024-07-14' },
      { id: 3, description: 'Purchase at Store Z', amount: -200, date: '2024-07-13' },
    ],
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        My Wallet
      </Typography>

      <Card sx={{ mb: 3, p: 2, bgcolor: '#f5f5f5' }}>
        <CardContent>
          <Typography variant="h5">Balance</Typography>
          <Typography variant="h4" color="primary" sx={{ mt: 1 }}>
            ${walletData.balance.toFixed(2)}
          </Typography>
        </CardContent>
      </Card>

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
                  {transaction.amount < 0 ? <RemoveCircleOutline /> : <AddCircleOutline />} ${Math.abs(transaction.amount).toFixed(2)}
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
