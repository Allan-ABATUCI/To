<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Projects>
 */
class ProjectsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name"=> fake()->sentence(),
            "description"=> fake()->realText(),
            "end_date"=> fake()->dateTimeBetween("now","+1 year"),
            "status"=> fake()->randomElement(["pending","inprogress","completed"]),
            "image_path"=> fake()->imageUrl(),
            "created_by"=> 1,
            "updated_by"=> 1,
        ];
    }
}
