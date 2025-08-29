import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';


export default function Index({projects}){
   
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Dashboard',
            href: '/dashboard',
        },
        {
        title: 'Projects',
        href: '/project',
    },
        
    ];
    return(
        <>
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />
            <DataTable columns={columns} data={data} />
        </AppLayout>
        </>
    )
}