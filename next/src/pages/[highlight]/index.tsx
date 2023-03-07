import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { request } from '../../utils/frontEnd';
import ClientTable from '../../components/tables/client';
import { IPClient, IRClient } from '../index';

const Index: NextPage = () => {
  const [clients, setClients] = useState<IPClient[]>([]);

  useEffect(() => {
    request('GET', '/clients').then((res) => {
      const cData = res.body.clients.map((client: IRClient) => {
        return {
          id: client.id,
          avatar: client.avatar,
          email: client.email,
          fullName: `${client.firstName} ${client.lastName}`,
          supportTier: client.supportTier,
          hourlyRate: client.hourlyRate,
        }
      })
      setClients(cData);
    })
  }, []);

  const onRegister = () => {
    return request('POST', '/clients');
  }

  return (
    <>
      <ClientTable clients={clients} onRegister={onRegister} />
    </>
  );
};

export default Index;
