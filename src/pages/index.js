import Head from 'next/head';
import React, { useEffect } from 'react';
import {
  signIn,
  signOut,
  useSession
} from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {

  const { data: session, status } = useSession()
  const router = useRouter();

  useEffect(() => {
    console.log(session, status)
    if (status === 'authenticated') {
      router.push('/apps')
    } else if (status === 'unauthenticated') {
      console.log(status)
      router.push('/api/auth/signin')
    }
  }, [session, status])
}

