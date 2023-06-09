import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { request } from '../utils/frontEnd';
import ClientTable from '../components/tables/client';
import { IValues } from '../components/modals/RegisterModal';

export interface IPClient {
  id: string;
  avatar: string;
  email: string;
  fullName: string;
  supportTier: 'standard' | 'gold' | 'platinum';
  hourlyRate: number;
}

export interface IRClient {
  id: string;
  avatar: string;
  birthday: string;
  email: string;
  firstName: string;
  lastName: string;
  sex: string;
  supportTier: 'standard' | 'gold' | 'platinum';
  hourlyRate: number;
}

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

  const onRegister = (body: IValues) => {
    return request('POST', '/clients', body);
  }

  return (
    <>
      <ClientTable clients={clients} onRegister={onRegister} />
    </>
  );
};

export default Index;
