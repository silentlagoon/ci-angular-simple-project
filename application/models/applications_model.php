<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Applications_model extends BaseModel
{
    protected $table = 'applications';

    public function __construct()
    {
        parent::__construct();
    }
}