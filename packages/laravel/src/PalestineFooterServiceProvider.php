<?php

namespace YousefOsama\PalestineFooter;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Blade;

class PalestineFooterServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Publish config
        $this->publishes([
            __DIR__.'/../config/palestine-footer.php' => config_path('palestine-footer.php'),
        ], 'palestine-footer-config');

        // Publish views
        $this->publishes([
            __DIR__.'/../resources/views' => resource_path('views/vendor/palestine-footer'),
        ], 'palestine-footer-views');

        // Load views
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'palestine-footer');

        // Register Blade Component
        Blade::component('palestine-footer', \YousefOsama\PalestineFooter\View\Components\PalestineFooter::class);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Merge config
        $this->mergeConfigFrom(
            __DIR__.'/../config/palestine-footer.php', 
            'palestine-footer'
        );
    }
}
