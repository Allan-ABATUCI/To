<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;
class Project extends Model
{
    /** @use HasFactory<\Database\Factories\ProjectFactory> */
    use HasFactory;
    public function tasks(){
        return $this->hasMany(Task::class);
    }
    public function created_by(){
        return $this->belongsTo(User::class,"created_by");
    }
    public function updated_by(){
        return $this->belongsTo(User::class,"updated_by");
    }
}
