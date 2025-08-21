<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"=> $this->id,
            "name"=> $this->name,
            "description"=> $this->description,
            "created_at"=> new Carbon($this->created_at)->format("d-m-Y"),
            "updated_at"=> new Carbon($this->updated_at)->format("d-m-Y"),
            "end_date"=> new Carbon($this->end_date)->format("d-m-Y"),
            "image_path"=> $this->image_path,
            "created_by"=> $this->created_by,
            "updated_by"=> $this->created_by,
            "status"=> $this->status
        ];
    }
}
