import Form from '@/app/ui/invoices/create-form';
import Breadcrumb from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export default async function Page(){
    const customers = await fetchCustomers();
    return (
        <main>
            <Breadcrumb
                breadcrumbs={[
                    {label: 'Invoices', href: '/dashboard/invoices'},
                    {label: 'Create Invoice', href: '/dashboard/invoices/create', active: true,}
                ]}
            />
            <Form customers={customers}/>
        </main>
    )
}