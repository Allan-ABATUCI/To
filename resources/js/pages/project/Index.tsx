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
                <table className="">
                    <thead className='w-full'>
                        <tr className="text-nowrap bg-accent-foreground px">
                            <th className="px-3 py-2">ID</th>
                            <th className="px-4 py-3">Nom</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-5 py-3">Date de création</th>
                            <th className="px-3 py-2">Échéance</th>
                        </tr>
                    </thead>
                   
                
                <tbody>
                    {projects.data.map(project=>
                        <tr>
                            <td className='px-3 py-2'>{project.id}</td>
                            <td className='px-3 py-2'>{project.name}</td>
                        </tr>
                    )}
                    
                </tbody>
                </table>
        </AppLayout>
        </>
    )
}