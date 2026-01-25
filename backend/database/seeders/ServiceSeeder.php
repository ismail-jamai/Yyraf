<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'name' => 'Import (الاستيراد)',
                'slug' => 'import',
                'description' => 'Service d\'importation de produits',
                'icon' => 'FaShip',
                'is_active' => true,
            ],
            [
                'name' => 'Storage (التخزين)',
                'slug' => 'storage',
                'description' => 'Service de stockage',
                'icon' => 'FaWarehouse',
                'is_active' => true,
            ],
            [
                'name' => 'Dropshipping (الدروبشيبينغ)',
                'slug' => 'dropshipping',
                'description' => 'Service de dropshipping',
                'icon' => 'FaBoxOpen',
                'is_active' => true,
            ],
            [
                'name' => 'Money Transfer (تحويل الأموال)',
                'slug' => 'money-transfer',
                'description' => 'Service de transfert d\'argent',
                'icon' => 'FaMoneyBillWave',
                'is_active' => true,
            ],
        ];

        foreach ($services as $service) {
            Service::updateOrCreate(['slug' => $service['slug']], $service);
        }
    }
}
