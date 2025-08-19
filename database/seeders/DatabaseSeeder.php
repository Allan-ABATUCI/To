<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Project;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use SebastianBergmann\CodeCoverage\Report\Xml\Project as P;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Allan',
            'email' => 'allan@example.com',
            'password'=> bcrypt('Laflemme1!'),
            'email_verified_at'=>time(),
        ]);
        Project::factory()
        ->count(30)
        ->hasTasks(30)
        ->create();
    }
}
