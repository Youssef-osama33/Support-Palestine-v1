<?php

namespace YousefOsama\PalestineFooter\View\Components;

use Illuminate\View\Component;

class PalestineFooter extends Component
{
    /**
     * السنة
     *
     * @var int
     */
    public $year;

    /**
     * اسم الموقع
     *
     * @var string
     */
    public $hostName;

    /**
     * الرسالة
     *
     * @var string|null
     */
    public $message;

    /**
     * إظهار الرسالة
     *
     * @var bool
     */
    public $showMessage;

    /**
     * لون الخلفية
     *
     * @var string
     */
    public $backgroundColor;

    /**
     * لون النص
     *
     * @var string
     */
    public $textColor;

    /**
     * Create a new component instance.
     *
     * @param  int|null  $year
     * @param  string|null  $hostName
     * @param  string|null  $message
     * @param  bool  $showMessage
     * @param  string  $backgroundColor
     * @param  string  $textColor
     * @return void
     */
    public function __construct(
        $year = null,
        $hostName = null,
        $message = null,
        $showMessage = true,
        $backgroundColor = '#000000',
        $textColor = '#ffffff'
    ) {
        $this->year = $year ?? date('Y');
        $this->hostName = $hostName ?? config('app.name', 'موقعنا');
        $this->message = $message ?? 'نحن نقف مع فلسطين حرة من النهر إلى البحر';
        $this->showMessage = $showMessage;
        $this->backgroundColor = $backgroundColor;
        $this->textColor = $textColor;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('palestine-footer::components.palestine-footer');
    }
}
