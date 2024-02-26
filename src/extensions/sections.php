<?php

use Kirby\Cms\PluginAsset;
use Kirby\Toolkit\I18n;

return [
    'seo-report' => [
        'props' => [
            'label' => fn ($label = null) => I18n::translate($label, $label),
            'siteUrl' => fn ($siteUrl = null) => $siteUrl,
            'keyphraseField' => fn ($keyphraseField = null) => $keyphraseField,
            'assessments' => fn ($assessments = []) => is_array($assessments) ? $assessments : [],
            'readability' => fn ($readability = true) => $readability,
            'links' => fn ($links = true) => $links !== false,
            'logLevel' => fn ($logLevel = null) => in_array($logLevel, ['error', 'warn', 'info', 'debug'], true) ? $logLevel : 'warn'
        ],
        'computed' => [
            'siteUrl' => function () {
                /** @var \Kirby\Cms\App */
                $kirby = $this->kirby();

                return $this->tryResolveQuery($this->siteUrl, $kirby->site()->url());
            },
            'config' => function () {
                /** @var \Kirby\Cms\App */
                $kirby = $this->kirby();
                $config = $kirby->option('johannschopplich.seo-report', []);

                $defaultConfig = [
                    'localePrefix' => $kirby->multilang()
                ];

                // Merge user configuration with defaults
                $config = array_replace_recursive($defaultConfig, $config);

                return $config;
            },
            'assets' => function () {
                /** @var \Kirby\Cms\App */
                $kirby = $this->kirby();
                $plugin = $kirby->plugin('johannschopplich/seo-report');

                return $plugin
                    ->assets()
                    ->clone()
                    ->map(fn (PluginAsset $asset) => [
                        'filename' => $asset->filename(),
                        'url' => $asset->url()
                    ])
                    ->values();
            }
        ],
        'methods' => [
            'tryResolveQuery' => function ($value, $fallback = null) {
                if (is_string($value) && str_starts_with($value, '{{') && str_ends_with($value, '}}')) {
                    return $this->model()->query(substr($value, 2, -2));
                }

                return $value ?? $fallback;
            }
        ]
    ]
];
