<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    /**
     * Get the user the post belongs to .
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

}
