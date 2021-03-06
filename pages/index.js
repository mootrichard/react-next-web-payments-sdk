import Head from 'next/head'
import Image from 'next/image'
import { AchPay, CreditCardInput, SquarePaymentsForm } from 'react-square-web-payments-sdk'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SquarePaymentsForm
          applicationId='sandbox-sq0idb-B-i4MbEZEARTWqSj7Gs9Ww'
          locationId='9PKBD3JCQFH0D'
          cardTokenizeResponseReceived={ async (token, buyer) => {
            const response = await fetch('/api/pay', {
              method: 'POST',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify({
                sourceId: token.token
              })
            })
            alert(JSON.stringify(await response.json(), null , 2));
          }}
        >
          <CreditCardInput />
          <p></p>
          <AchPay
            accountHolderName='Richard Moot'
          />
        </SquarePaymentsForm>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
