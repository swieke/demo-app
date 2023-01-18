import { useEffect } from 'react';
import {
  useSession
} from 'next-auth/react';
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